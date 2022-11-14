import React from 'react'
import {useRecoilValue} from 'recoil';
import charCountState from '../../atomAndSelector/selector';
import changeColorState from '../../atomAndSelector/selectorColor';
import _shuffle from 'lodash';
import { ArryTypes } from './ArryTypes';


const GenericTypes = () => {
    const count = useRecoilValue(charCountState);
    const color = useRecoilValue(changeColorState)

    

    interface Lengthy{
        length: number;
    }

   function countAndDescribe<T extends Lengthy>(element: T): [T, string]  {
    let descriptionText='';
        if(element.length === 1) {
            descriptionText='got 1 Character';
        } else if (element.length > 1) {
            descriptionText = 'Got ' + element.length + ' Characters';
        }
        return [element, descriptionText   ]            
    };

 //   console.log(countAndDescribe('3422343333'))


    class Storage <T> {
        private data : T[] = [];

        addItem(item: T) {
            this.data.push(item);
        }

        removeItem(item: T){
            this.data.splice(this.data.indexOf(item),1);
        }

        getItems() {
            return [...this.data];
        }
    }

    const textStorage = new Storage<string>();
    textStorage.addItem('hello');
    textStorage.addItem('world');
    textStorage.removeItem('world');
    // console.log(textStorage.getItems());
 
   

return (
    <div style={{display: "flex", justifyContent:"space-around"}}>
        <h3>GenericTypes</h3>
        <button style={{backgroundColor: color ? 'red' : 'blue'}}><h4>{count}</h4></button>
        <h4>Use Recoil Value CharCounter</h4> 
        <ArryTypes />
    </div>
  )
}

export default GenericTypes