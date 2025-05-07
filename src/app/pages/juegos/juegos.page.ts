import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
  standalone: false,
})
export class JuegosPage implements OnInit {

  constructor(
    private storageService: StorageService,
    private navCtrl: NavController
  ) { }

  async selectAnswer(ageGroup: string){
    await this.storageService.set('ageGroup', ageGroup);
    this.navCtrl.navigateForward('/juegos/juegos-2');
  }
  ngOnInit() {
  }

}
