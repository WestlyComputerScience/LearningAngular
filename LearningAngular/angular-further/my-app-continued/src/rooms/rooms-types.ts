export interface RoomType {
    availableRooms: number;
    bookedRooms: number;
    totalRooms: number;
}

export interface RoomDetailsList {
    roomNumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkInTime: Date;
    checkOutTime: Date;
    rating: number;
}