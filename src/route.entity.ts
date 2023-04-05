export type LatLng = { lat: number; lng: number };
export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

export class Route {
  public props: Required<RouteProps>;

  constructor(props: RouteProps) {
    this.props = {
      ...props,
      points:props.points || []
    }
  }
}

new Route({
  title: "minha rota",
  startPosition: { lat: 15, lng: 15 },
  endPosition: { lat: 20, lng: 20 },
  points: [
    { lat: 20, lng: 20 },
    { lat: 20, lng: 20 },
  ],
});
