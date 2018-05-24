import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  preTest(content) {
    return content.replace(
      /\[youtube(.*)\].*\/watch\?v\=(.*)(\[\/youtube\])$/gim,
      `<iframe src="https://www.youtube.com/embed/Z7BvggYQJcI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
    );
  }

  youtubeVideoReplaces(match, widthAndHeight, videoId) {
    return `<iframe ${widthAndHeight} src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  }
}
