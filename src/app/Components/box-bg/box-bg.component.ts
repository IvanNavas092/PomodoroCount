import { Component, Input } from '@angular/core';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { quality, format } from '@cloudinary/url-gen/actions/delivery';
import { Cloudinary } from '@cloudinary/url-gen';
import { environment } from 'src/app/environments/environment';
@Component({
  selector: 'app-box-bg',
  templateUrl: './box-bg.component.html'
})
export class BoxBgComponent {
  @Input() label!: string;
  @Input() image!: string;
  @Input() video!: string;

  cld = new Cloudinary({
    cloud: {
      cloudName: environment.cloudinary.cloudName
    }
  });

  extractPublicId(url: string): string {
    const parts = url.split('/upload/');
    if (parts.length < 2) return url; // No es url de Cloudinary
    const pathAndFile = parts[1]; // e.g. "v1753192677/izu2f7q2nslqrq3fd8tm.jpg"
    const withoutVersion = pathAndFile.replace(/^v\d+\//, '').split('?')[0];
    const publicId = withoutVersion.replace(/\.[^/.]+$/, '');
    return publicId;
  }

  getOptimizedImage(imageUrl: string, width: number) {
    const publicId = this.extractPublicId(imageUrl);
    return this.cld
      .image(publicId)
      .resize(fill().width(width))
      .delivery(format('auto'))
      .delivery(quality('auto'))
      .toURL();
  }

  getOptimizedVideo(videoUrl: string, width: number): string {
    const publicId = this.extractPublicId(videoUrl);
    return this.cld
      .video(publicId)
      .resize(fill().width(width)) // Limita resolución
      .delivery(quality('auto'))
      .delivery(format('auto')) // Devuelve webm/mp4 adaptado
      .toURL();
  }
}
