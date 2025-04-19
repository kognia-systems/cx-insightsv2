import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BlueprintModel } from '@blueprints/blueprint-model';
import { BlueprintsService } from '@blueprints/blueprints.service';
import { NavbarTitleService } from '@shared/navbar-title.service';
import { UserModel } from '@users/user-model';
import { UsersService } from '@users/users.service';

@Component({
  selector: 'app-audit-blueprints-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './audit-blueprints-page.component.html',
  styleUrl: './audit-blueprints-page.component.scss',
})
export class AuditBlueprintsPageComponent {
  allBlueprints: BlueprintModel[] = []; // Lista completa
  filteredBlueprints: BlueprintModel[] = []; // Después de búsqueda
  displayedBlueprints: BlueprintModel[] = []; // Paginación

  currentPage = 1;
  pageSize = 10;
  searchTerm = '';
  sortColumn: keyof BlueprintModel = 'id';
  sortDirection: 'asc' | 'desc' = 'asc';
  totalPages = 0;

  constructor(
    private blueprintService: BlueprintsService,
    private navbarTitleService: NavbarTitleService
  ) {}

  ngOnInit(): void {
    this.navbarTitleService.setTitle('Módulo de auditoría');
    this.blueprintService.getAllBlueprints().subscribe({
      next: (blueprints) => {
        console.log(blueprints);

        this.allBlueprints = blueprints;
        this.applyFilters();
      },
    });
  }

  applyFilters() {
    const term = this.searchTerm.toLowerCase();

    this.filteredBlueprints = this.allBlueprints.filter(
      (bp) =>
        bp.name?.toLowerCase().includes(term) ||
        bp.business_id?.toLowerCase().includes(term) ||
        bp.segment_id?.toLowerCase().includes(term)
    );

    this.sortData();
  }

  sortData() {
    this.filteredBlueprints.sort((a, b) => {
      const valueA = a[this.sortColumn];
      const valueB = b[this.sortColumn];
      return (
        (valueA! < valueB! ? -1 : 1) * (this.sortDirection === 'asc' ? 1 : -1)
      );
    });
    this.paginate();
    this.calculatePagination();
  }

  changeSort(column: keyof BlueprintModel) {
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
    this.displayedBlueprints = this.filteredBlueprints.slice(start, end);
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
    this.totalPages = Math.ceil(this.filteredBlueprints.length / this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
