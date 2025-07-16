import { Inject, Injectable } from "@angular/core";
import { MenuUseCase } from "../usecases";
import { MenuRepository } from "../repositories/menu.repository";
import { MenuResponseEntity } from "../entities/menu-response.entity";
import { MenuRequestEntity } from "../entities/menu-information.entity";
import { Observable } from "rxjs";

@Injectable()
export class MenuInteractor {
  private menuUseCase: MenuUseCase;

  constructor(readonly menuRepository: MenuRepository) {
    this.menuUseCase = new MenuUseCase(menuRepository);
  }

  public menuInventory(params: MenuRequestEntity): Observable<MenuResponseEntity> {
    return this.menuUseCase.execute(params);
  }
}

