import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServicePostFiles } from '../../services/service.postfiles';
import { FileModel } from '../../models/filemodel';

@Component({
  selector: 'app-testingfiles',
  templateUrl: './testingfiles.component.html',
  styleUrl: './testingfiles.component.css'
})
export class TestingfilesComponent implements OnInit {
  @ViewChild("cajafile") cajaFileRef!: ElementRef;
  public fileContent: string;
  
  constructor(private _service: ServicePostFiles) {
    this.fileContent = "";
  }
  ngOnInit(): void {
    
  }

  subirFichero(event:any): void{
    console.log(event);
    //var contenido = "";
    var file = this.cajaFileRef.nativeElement.files[0];
    var miPath = this.cajaFileRef.nativeElement.value.split("\\");
    var ficheroNombre = miPath[2];
    console.log(ficheroNombre);

    var reader = new FileReader();
    //reader.readAsDataURL(file);
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      let buffer: ArrayBuffer;
      buffer = reader.result as ArrayBuffer;
      var base64: string;
      base64 = btoa(
        new Uint8Array(buffer)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      
      this.fileContent = base64;
      var newFileModel = 
        new FileModel(ficheroNombre, base64);
        this._service.postFile(newFileModel).subscribe(response => {
          console.log(response);
        })
    };
    //console.log(file);
    //var contenido = this.cajaFileRef.nativeElement.value;
    
  }
}
