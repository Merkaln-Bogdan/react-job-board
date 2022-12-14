import React, { useCallback, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { defaultTheme } from "styles/themeMap";

import { MapInfo } from "./components/MapInfo";
import { LocationType } from "types";

const defaulOptions = {
  zoomControl: true,
  mapTypeControl: true,
  scaleControl: true,
  streetViewControl: true,
  rotateControl: true,
  fullscreenControl: true,
  styles: defaultTheme,
};

const containerStyle = {
  display: "block",
  minWidth: "320px",
  height: "400px",
  borderRadius: "8px",
};

const defaultCenter = {
  lat: 48.22544,
  lng: 16.352566,
};

type MapProps = {
  center: LocationType;
  info: any;
};
const libraries: any = ["places"];

const Map = (props: MapProps) => {
  const { center, info } = { ...props };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });

  const formatedCenter = {
    lat: center.lat,
    lng: center.long,
  };

  const mapRef = useRef(undefined);

  const onLoad = useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={formatedCenter || defaultCenter}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={defaulOptions}
    >
      <MapInfo info={info} />
    </GoogleMap>
  ) : (
    <>Loading...</>
  );
};

export { Map };
