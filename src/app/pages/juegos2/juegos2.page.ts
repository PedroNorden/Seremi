import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-juegos2',
  templateUrl: './juegos2.page.html',
  styleUrls: ['./juegos2.page.scss'],
  standalone: false,
})
export class Juegos2Page implements OnInit {

  constructor(private storage: StorageService) { }

  async ionViewWillEnter() {
    const ageGroup = await this.storage.get('ageGroup');
  }

  ngOnInit() {
  }

}
