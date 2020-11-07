import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCommentComponent {
  @Input() isLoading: boolean;
  @Input() comment: fromSharedModels.Comment;
  @Output() onDeleteComment: EventEmitter<number> = new EventEmitter<number>();

  get body(): string {
    return this.comment.body;
  }

  get username(): string {
    return this.comment.author.username;
  }

  get authorImage(): string {
    return this.comment.author.image;
  }

  get createdAt(): string {
    return this.comment.createdAt;
  }

  get commentId(): number {
    return this.comment.id;
  }

  deleteComment(id: number): void {
    this.onDeleteComment.emit(id);
  }
}
