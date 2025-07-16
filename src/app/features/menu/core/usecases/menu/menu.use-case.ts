import { UseCase } from "src/app/core/base";
import { MenuRepository } from "@menu/core/repositories/menu.repository";
import { MenuResponseEntity } from "@menu/core/entities/menu-response.entity";
import { MenuRequestEntity } from "@menu/core/entities";
import { Observable } from "rxjs";

export class MenuUseCase implements UseCase<MenuRequestEntity, MenuResponseEntity> {
  constructor(private menuRepository: MenuRepository) {}

  public execute(params: MenuRequestEntity): Observable<MenuResponseEntity> {
    return this.menuRepository.getMenu(params);
  }
}
