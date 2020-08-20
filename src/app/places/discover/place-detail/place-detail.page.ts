import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private placesServices: PlacesService) { }

    ngOnInit() {
      this.route.paramMap.subscribe(paramMap => {
        if (!paramMap.has('placeId')){
          this.navCtrl.navigateBack('/places/offers');
          return;
        }
        this.place = this.placesServices.getPlace(paramMap.get('placeId'));
      });
    }

  onBookPlace(){
  this.navCtrl.navigateBack('/places/discover');
  this.modalCtrl.create({
    component: CreateBookingComponent,
    componentProps: { selectedPlace: this.place }
  }).then(modalEl => {
    modalEl.present();
    return modalEl.onDidDismiss();
  })
  .then(resultData => {
    console.log(resultData.data, resultData.role);
    if(resultData.role === 'confirm'){
      console.log('booked!');
    }
  })
  }
}
