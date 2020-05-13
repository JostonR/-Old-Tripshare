function user(){
    this.uniqname = null;
    this.password = null;
    var owned_trips = [];
}

function trip(){
    this.starting_point = null;
    this.destination = nulll;
    this.calendar_info = null;
    this.carrier = null;
    this.owner = null; //type user
    this.looking_for_car_mates = true;
    this.trip_preferences = false;
}

function preferences(){
    this.origin_tolerance;
    this.destination_tolerance;
    this.time_tolerance;
    this.calendar_tolerance;

}

var trips = [];

function create_trip(starting_point, destination, calendar, carrier, owner, trip_preferences){
    var trip = new trip();
    trip.starting_point = starting_point;
    trip.destination = destination;
    trip.calendar_info = calendar;
    trip.carrier = carrier;
    trip.owner = owner;
    trip.trip_preferences = trip_preferences;

    trips.push(trip);
}



