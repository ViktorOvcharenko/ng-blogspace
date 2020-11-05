import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCommentComponent {

}
