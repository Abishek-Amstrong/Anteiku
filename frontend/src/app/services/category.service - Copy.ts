import { Injectable } from "@angular/core";
import {
  VarietyModelServer,
  ServerResponse,
} from "src/app/models/variety.model";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class VarietyService {
  private SERVER_URL = environment.SERVER_URL;

  public varieties: arietyModelServer[];

  constructor(private http: HttpClient) {}

  public getAllVarieties(): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(
      this.SERVER_URL + "/categories/all-varieties"
    );
    
  }

  public getVarieties() : arietyModelServer[]{
    return this.varieties;
  }

  public setVarieties(varieties) : void{
    this.varieties = varieties;
  }
}