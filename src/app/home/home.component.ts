import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  username!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ){}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['name'];
    });
  }

  goToVotePage() {
    this.router.navigate(['/vote', '2']);// à passer via candidat
  }

}
