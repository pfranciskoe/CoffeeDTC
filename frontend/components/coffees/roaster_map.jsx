import React from 'react'

class RoasterMap extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        const mapOptions = {
            center: { lat: this.props.roaster.lat, lng: this.props.roaster.lng },
            zoom: 14
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        let marker = new google.maps.Marker({ position: mapOptions['center'], map: this.map })
    }
    
    render(){
        return (
        <div className='roast-map'ref={map => this.mapNode = map}>
        </div>
        )
    }

}


export default RoasterMap;
