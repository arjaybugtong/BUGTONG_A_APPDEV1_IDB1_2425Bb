import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  statsTitle = 'Product Statistics';
  
  totalProducts: number = 0;
  availableProducts: number = 0;
  outOfStockProducts: number = 0;

  categories: string[] = [];
  selectedCategory: string = '';
  maxPrice: number = 2000;
  availableOnly: boolean = false;

  filteredProducts: Product[] = [];
  allProducts: Product[] = [];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.allProducts = products;
      this.updateStatistics();
      this.extractCategories();
      this.filterProducts();
    });
  }

  updateStatistics(): void {
    this.totalProducts = this.allProducts.length;
    this.availableProducts = this.allProducts.filter(p => p.isAvailable).length;
    this.outOfStockProducts = this.totalProducts - this.availableProducts;
  }

  extractCategories(): void {
    this.categories = Array.from(new Set(this.allProducts.map(p => p.category)));
  }

  filterProducts(): void {
    this.filteredProducts = this.allProducts.filter(product => {
      return (
        (!this.selectedCategory || product.category === this.selectedCategory) &&
        (product.price <= this.maxPrice) &&
        (!this.availableOnly || product.isAvailable)
      );
    });
  }

  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }

  navigateToAddProduct(): void {
    this.router.navigate(['/add-product']);
  }
}
