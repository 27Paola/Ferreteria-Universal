import { Observable } from "rxjs";
import { MenuRequestEntity } from "../entities/menu-information.entity";
import { MenuResponseEntity } from "../entities/menu-response.entity";

export abstract class MenuRepository {
  public abstract getMenu(params: MenuRequestEntity): Observable<MenuResponseEntity>;
  public abstract updateMenu(params: MenuRequestEntity): Observable<MenuResponseEntity>;
}
