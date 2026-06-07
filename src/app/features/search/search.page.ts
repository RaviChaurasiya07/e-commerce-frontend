import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';
import { SearchStore } from '../../state/search.store';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent],
  templateUrl: './search.page.html',
  styleUrl: './search.page.scss',
})
export class SearchPage {
  readonly searchStore = inject(SearchStore);
  readonly trending = ['trail running shoes', 'linen set', 'wireless earbuds', 'smart watch'];
}

