import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService <T extends { id?: string }> {

  constructor(private afs: AngularFirestore) { }

  async add(collectionName: string, data: T, id?: string): Promise<string>{
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    console.log("Feltöltve" + data);
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }
}
