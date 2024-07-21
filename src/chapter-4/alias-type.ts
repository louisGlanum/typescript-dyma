type UserStatusType = 'online' | 'offline'| 'busy';
type customModulos =  1 | 2 | 3;
type ObjectId = string;

type UserType = {
    id: ObjectId;
    username: string;
    age: number;
    status: UserStatusType
}

function getUserStatus(user:UserType): UserStatusType {
    return user.status
}

