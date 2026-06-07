import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-static-page',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent],
  templateUrl: './static.page.html',
  styleUrl: './static.page.scss',
})
export class StaticPage {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly content = this.route.snapshot.data;
  readonly slug = this.route.snapshot.paramMap.get('slug') ?? '';
  readonly pageTitle = this.content['title'] ?? this.slug.replace(/-/g, ' ') ?? 'Page';

  constructor() {
    this.title.setTitle(`Aster Commerce | ${this.pageTitle}`);
    this.meta.updateTag({ name: 'description', content: this.content['subtitle'] ?? 'Enterprise storefront page.' });
  }
}

