import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import Slider from 'material-ui/Slider';
class Filter extends Component {

  render() {
    return <div>
      <Chip className='Chip'>{this.props.name} {this.props.dVal}</Chip>
      <input ref="valll" type="range"  onChange={(e)=>{
        let val = this.refs.valll.value;
        this.props.find(e, val, this.props.name)
      }} name={this.props.name} defaultValue={this.props.dVal}   min={this.props.min} max={this.props.max }/>
     {/*<Slider ref='valll' defaultValue={this.props.dVal} min={this.props.min}  max={this.props.max } onChange={(e)=>{*/}
         {/*// let val = value;*/}
         {/*this.props.find(e, value, this.props.name)*/}
     {/*}} />*/}
    </div>;
  }
}

export default Filter;
