import { Component } from '@angular/core';
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  model404$ = this.ngtGLTFLoader.load('/assets/models/404.gltf');

  constructor(private ngtGLTFLoader: NgtGLTFLoader) {}
}
