import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserModel } from '@users/user-model';
import { UsersService } from '@users/users.service';
import { NavbarTitleService } from '../../../../../core/shared/services/navbar-title.service';

@Component({
  selector: 'app-user-list-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-list-page.component.html',
  styleUrl: './user-list-page.component.scss',
})
export class UserListPageComponent {

  allUsers: UserModel[] = []; // Lista completa
  filteredUsers: UserModel[] = []; // Después de búsqueda
  displayedUsers: UserModel[] = []; // Paginación

  currentPage = 1;
  pageSize = 10;
  searchTerm = '';
  sortColumn: keyof UserModel = 'first_name';
  sortDirection: 'asc' | 'desc' = 'asc';
  totalPages = 0;

  constructor(
    private userService: UsersService,
    private navbarTitleService: NavbarTitleService
  ) {}

  ngOnInit(): void {
    this.navbarTitleService.setTitle('Administración de usuarios');
    this.userService.getUsers().subscribe({
      next: (users) => {
        console.log(users);

        this.allUsers = users;
        this.applyFilters();
      },
    });
  }

  applyFilters() {
    const term = this.searchTerm.toLowerCase();

    this.filteredUsers = this.allUsers.filter(
      (user) =>
        user.email?.toLowerCase().includes(term) ||
        user.first_name?.toLowerCase().includes(term) ||
        user.role?.toLowerCase().includes(term)
    );

    this.sortData();
  }

  sortData() {
    this.filteredUsers.sort((a, b) => {
      const valueA = a[this.sortColumn];
      const valueB = b[this.sortColumn];
      return (
        (valueA! < valueB! ? -1 : 1) * (this.sortDirection === 'asc' ? 1 : -1)
      );
    });
    this.paginate();
    this.calculatePagination();
  }

  changeSort(column: keyof UserModel) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.sortData();
  }

  paginate() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.displayedUsers = this.filteredUsers.slice(start, end);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.paginate();
  }

  onSearchChange() {
    this.currentPage = 1;
    this.applyFilters();
  }

  onPageSizeChange() {
    this.currentPage = 1;
    console.log(this.pageSize);

    this.applyFilters();
  }

  calculatePagination() {
    this.totalPages = Math.ceil(this.filteredUsers.length / this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
