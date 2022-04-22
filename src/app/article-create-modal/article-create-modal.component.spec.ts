import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCreateModalComponent } from './article-create-modal.component';

describe('ArticleCreateModalComponent', () => {
  let component: ArticleCreateModalComponent;
  let fixture: ComponentFixture<ArticleCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleCreateModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
