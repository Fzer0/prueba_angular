import { Component, OnInit } from '@angular/core';
import { Roles as RolesService } from '../../services/roles';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles implements OnInit {

  constructor(private rolesService: RolesService) {}

  ngOnInit(): void {
    this.rolesService.getRoles().subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }
}