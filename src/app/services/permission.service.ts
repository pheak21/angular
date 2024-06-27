import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  userPermissions: string[] = [];

  constructor(private authService: AuthService) { 
    this.authService.roles$.subscribe(roles => {   
      if(roles.includes('admin')){
        this.userPermissions = ['canCreate', 'canEdit', 'canDelete'];
      }
    });
  }

  hasPermission(permission: string): boolean {
    return this.userPermissions.includes(permission);
  }
}
