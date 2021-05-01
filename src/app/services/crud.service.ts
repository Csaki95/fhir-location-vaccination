import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Location } from 'src/app/shared/models/location.model'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private afs: AngularFirestore) {
  }

  async add(collectionName: string, data: Location, id?: string): Promise<string>{
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }
}
