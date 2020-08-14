import React from 'react';
import {getMergeSortAnimations} from './mergeSort.js';
import '../styles/SortVisualizer.css';
import {getBubbleSort} from './bubbleSort';
import {getQuickSort} from './quickSort';
import {getSelectionSort} from './selectionSort';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 5;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 175;

// This is the main color of the array bars.
const PRIMARY_COLOR = '#6394D0';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 600));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }


  selectionSort() {
      const animations = getSelectionSort(this.state.array);

      for(let i = 0; i <animations.length; i++){
          const element = animations[i];;
          const arrayBars = document.getElementsByClassName('array-bar');
          if(element[0] === false){
              const indexOne = element[2];
              const indexTwo = element[3];
              const color = element[1] ? PRIMARY_COLOR : SECONDARY_COLOR;
              setTimeout( () => {
                  arrayBars[indexOne].style.backgroundColor = color;
                  arrayBars[indexTwo].style.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS )
          }else{
              setTimeout( () => {
                  const indexOne = element[2];
                  const indexTwo = element[3];
                  arrayBars[indexOne].style.height =`${this.state.array[indexOne]}px`;
                  arrayBars[indexTwo].style.height = `${this.state.array[indexTwo]}px`;
              }, i * ANIMATION_SPEED_MS)
          }
      }

  }

  bubbleSort() {

      const animations = getBubbleSort(this.state.array);
      for(let i = 0; i < animations.length; i++){
          const element = animations[i];;
          const arrayBars = document.getElementsByClassName('array-bar');
          if(element[0] === false){
              const indexOne = element[2];
              const indexTwo = element[3];
              const color = element[1] ? PRIMARY_COLOR : SECONDARY_COLOR;
              setTimeout( () => {
                  arrayBars[indexOne].style.backgroundColor = color;
                  arrayBars[indexTwo].style.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS )
          }else{
              setTimeout( () => {
                  const index = element[1];
                  const newValue = element[2];
                  const newValue2 = element[3];
                  arrayBars[index].style.height =`${newValue}px`;
                  arrayBars[index + 1].style.height = `${newValue2}px`;
              }, i * ANIMATION_SPEED_MS)


          }
      }

    }

    quickSort() {
        let low = 0;
        let high = this.state.array.length - 1;
        const animations = getQuickSort(this.state.array, low, high);

        for(let i = 0; i < animations.length; i++){
            const element = animations[i];
            const arrayBars = document.getElementsByClassName('array-bar');
            if(element[0] === false){
                const indexOne = element[2];
                const indexTwo = element[3];
                const color = element[1] ? PRIMARY_COLOR : SECONDARY_COLOR;
                setTimeout( () => {
                    arrayBars[indexOne].style.backgroundColor = color;
                    arrayBars[indexTwo].style.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS )
            }else{
                setTimeout( () => {
                    const indexOne = element[2];
                    const indexTwo = element[3];
                    arrayBars[indexOne].style.height =`${this.state.array[indexOne]}px`;
                    arrayBars[indexTwo].style.height = `${this.state.array[indexTwo]}px`;
                }, i * ANIMATION_SPEED_MS)
            }
        }



    }


  render() {
    const {array} = this.state;

    return (
      <div>
          <div className="array-container">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}px`,
                }}></div>
            ))}
          </div>
          <div className="buttons">
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.selectionSort()}>Selection Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          </div>
      </div>
    );
  }
}


function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
