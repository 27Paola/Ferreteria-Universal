import { Observable } from "rxjs";
import { LoginRequestEntity } from "../entities/login-information.entity";
import { LoginResponseEntity } from "../entities/login-response.entity";
import { RegisterRequestEntity } from "../entities/register-infortmation.entity";
import { RegisterResponseEntity } from "../entities/register-response.entity";

export abstract class AuthRepository {
  public abstract authenticateUser(params: LoginRequestEntity): Observable<LoginResponseEntity>;
  public abstract registerUser(params: RegisterRequestEntity): Observable<RegisterResponseEntity>;
}

