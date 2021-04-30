import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Location } from 'src/app/shared/models/location.model'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  collectionName: string;

  constructor(private afs: AngularFirestore) {
    this.collectionName = "location-collection";
  }

  getLocation(id: string){
    return this.afs
      .collection(this.collectionName)
      .snapshotChanges();
  }

  getLocationList(){
    return this.afs
      .collection(this.collectionName)
      .snapshotChanges();
  }

  createLocation(location: Location){
    return new Promise<any>((resolve, reject) =>{
      this.afs
        .collection(this.collectionName)
        .add(location)
        .then(response => {console.log(response)}, error => reject(error));
    });
  }

  deleteLocation(location: Location){
    return this.afs
      .collection(this.collectionName)
      .doc(location.id)
      .delete();
  }
}
