import { Injectable } from '@angular/core';
import { Produkt } from '../shared/models/produkte';
import { sample_produkte, sample_tag } from '../data';
import { Tag } from '../shared/models/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PRODUKTE_BY_ID_URL, PRODUKTE_BY_SEARCH_URL, PRODUKTE_BY_TAG_URL, PRODUKTE_TAGS_URL, PRODUKTE_URL } from '../shared/constant/url';

@Injectable({
  providedIn: 'root'
})
export class ProduktService {

  constructor(private http: HttpClient) { }

  getAll():Observable <Produkt[]>{
    return this.http.get<Produkt[]>(PRODUKTE_URL);
  }
  getAllProdBySearch(searchProd:string){
    return this.http.get<Produkt[]>(PRODUKTE_BY_SEARCH_URL+searchProd);  }

  getAllTag():Observable<Tag[]>{
    return   this.http.get<Tag[]>(PRODUKTE_TAGS_URL);
  }
  getAllProdByTag( tagName :string):Observable<Produkt[]>{
    return tagName=='All'?this.getAll():
    this.http.get<Produkt[]>(PRODUKTE_BY_TAG_URL+tagName);
  }
  getProdId(id:number):Observable<Produkt>{
    return this.http.get<Produkt>(PRODUKTE_BY_ID_URL+id);

  }
}
