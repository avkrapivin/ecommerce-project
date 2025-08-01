import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: false,
  
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
    
    constructor(private router: Router) {

    }
    
    ngOnInit() {
        
    }

    doSearch(value: string) {
        console.log(`value=${value}`);
        this.router.navigateByUrl(`/search/${value}`);
    }
}
