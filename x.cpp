#include <iostream>
#include <ctime>
#include <vector>

struct User
{
    std::string uniqname;
    std::string password;

};
struct Preferences{
    double origin_tolerance;
    double destination_tolerance;
    int time_tolerance;
    tm calendar_info_tolerance;
};
struct Trip
{
    /* data */
    std::string destination;
    std::string starting_pont;
    tm calendar_info;
    User* owner;
    bool looking_for_car_mates = true;
    Preferences* trip_preferences;
};

std::vector<Trip*> trips; 


void set_preferences(double origin, double destination, double time, Trip* this_trip){
    auto it = find(trips.begin(), trips.end(), this_trip);
    if(it != trips.end()){
        ((*it)->trip_preferences->origin_tolerance) = origin;
        ((*it)->trip_preferences->destination_tolerance) = destination;
        ((*it)->trip_preferences->time_tolerance) = time;
    }
}

bool compare_tolerance(Trip* this_trip, Trip* trip_compare_to){
    //if calendar day is different/outside tolerance return false
    //if this_trip + time tolerance not in realm of that_trip + time_tolerance return false
    //check if dest tolerance is valid with that dest
    //check if origin tolerance is valid 
}

std::vector<Trip*> find_matches(Trip* this_trip){
    std::vector<Trip*> matches_travellers;
    for(int i = 0; i < (int)trips.size(); i++){
        if(compare_tolerance(this_trip, trips[i])){
            trips.push_back(trips[i]);
        }
    }
}

std::vector<Trip*> view_my_trips(User* this_user){
    std::vector<Trip*> my_trips;
    for(int i = 0; i < trips.size(); i++){
        if(trips[i]->owner == this_user){
            my_trips.push_back(trips[i]);
        }
    }
}

bool add_trip(std::string destination, std::string starting, tm calendar_info){
    Trip* t;
    t->destination = destination;
    t->starting_pont = starting;
    t->calendar_info = calendar_info;
    trips.push_back(t);
    return;
}

bool delete_done_trips(){
    //if trip is passed, delete trip from vector
}

