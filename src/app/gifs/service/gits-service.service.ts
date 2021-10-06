import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {query} from '@angular/animations';
import {userError} from "@angular/compiler-cli/src/transformers/util";
import {Gif, SearchGifsResponse} from "../interfaceGifs/gifs.interface";

@Injectable({
  providedIn: 'root'
})
export class GitsServiceService {

  private apiKey: string = 'mqWs5onK7tQYSyaoXmWslp7kv9Y0blUs&q';
  private _historial: string[] = [];
  public resultados: Gif[] = [];
  private _servicioUrl: string = 'http://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    //ALMACENA EN LOCAL STORAGE
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('historialImg')!) || [];


    /* if (localStorage.getItem('historial')) {
        this._historial = JSON.parse(localStorage.getItem('historial')!);
     }*/
  }

  get historial(): string[] {
    return this._historial;
  }


  buscargits(query: string) {
    //Validaciones
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query)
      this._historial = this._historial.slice(0, 10);
      //LOCALSTORAGE
      localStorage.setItem('historial', JSON.stringify(this._historial));


    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);
    console.log(params.toString())

     //this.http.get<SearchGifsResponse>(`${ this._servicioUrl }/search`,{params})
   this.http.get<SearchGifsResponse>(`http://api.giphy.com/v1/gifs/search?api_key=mqWs5onK7tQYSyaoXmWslp7kv9Y0blUs&q=${query}&limit=10`)
      .subscribe(resp => {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('historialImg', JSON.stringify(this.resultados));

      })

  }

  set historial(value: string[]) {
    this._historial = value;
  }


}


/*

    this.http.get<SearchGifsResponse>(`http://api.giphy.com/v1/gifs/search?api_key=mqWs5onK7tQYSyaoXmWslp7kv9Y0blUs&q=${query}&limit=10`)


 async buscargits(query: string) {
    //Validaciones
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query)

    }
    this._historial = this._historial.slice(0, 10);

    const resp = await fetch('http://api.giphy.com/v1/gifs/search?api_key=mqWs5onK7tQYSyaoXmWslp7kv9Y0blUs&q=rock&limit=10');
    const data = await  resp.json();
    console.log(data)
    /*
    fetch('http://api.giphy.com/v1/gifs/search?api_key=mqWs5onK7tQYSyaoXmWslp7kv9Y0blUs&q=rock&limit=10')
      .then(resp => {
        resp.json().then(data => console.log(data));
      })
}
 */
