import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { MenuRepository } from '@menu/core/repositories/menu.repository';
import { MenuRequestEntity } from '@menu/core/entities';
import { MenuResponseEntity } from '@menu/core/entities/menu-response.entity';
import { menuMock } from '@shared/mocks/menu.mock';



@Injectable({
  providedIn: 'root'
})
export class MenuImplementationRepositoryFake extends MenuRepository {
  public getMenu(params: MenuRequestEntity): Observable<MenuResponseEntity> {
    return of(menuMock).pipe(delay(1500));
  }
  public updateMenu(params: MenuRequestEntity): Observable<MenuResponseEntity> {
    return of(menuMock).pipe(delay(1500));
  }
}

