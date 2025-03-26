import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Product Management App';
  currentPage = 'Dashboard';

  isDarkTheme = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      const path = event.urlAfterRedirects;
      if (path.includes('/dashboard')) {
        this.currentPage = 'Dashboard';
      } else if (path.includes('/products') && !path.includes('/add-product')) {
        this.currentPage = 'Products';
      } else if (path.includes('/add-product')) {
        this.currentPage = 'Add Product';
      } else if (path.includes('/edit-product')) {
        this.currentPage = 'Edit Product';
      }
    });
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    console.log('Theme toggled:', this.isDarkTheme ? 'Dark' : 'Light');
  }
}
