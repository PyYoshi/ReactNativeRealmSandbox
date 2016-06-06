import Realm from 'realm';

class Car { }
Car.schema = {
    name: 'Car',
    primaryKey: 'id',
    properties: {
        id: 'int',
        make: 'string',
        model: 'string',
        miles: 'int',
    }
};

class Person { }
Person.schema = {
    name: 'Person',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string'
    }
};

const clear = () => {
    let realm = new Realm({ schema: [Car, Person] });
    realm.write(() => {
        realm.deleteAll();
    });
}

const writeTransactionCreateCar = () => {
    let realm = new Realm({ schema: [Car, Person] });
    realm.write(() => {
        let myCar = realm.create('Car', {
            id: 1,
            make: 'Honda',
            model: 'Civic',
            miles: 1000,
        }, true);
    });
}

const writeTransactionUpdateCar = () => {
    let realm = new Realm({ schema: [Car, Person] });
    realm.write(() => {
        let myCar = realm.create('Car', {
            id: 1,
            make: 'Honda',
            model: 'Civic',
            miles: 2000,
        }, true);
    });
}

const writeTransactionUpdateCarWithError = () => {
    let realm = new Realm({ schema: [Car, Person] });
    realm.write(() => {
        let myCar = realm.create('Car', {
            id: 1,
            make: 'Honda',
            model: 'Civic',
            miles: 3000,
        }, true);
        throw new Error('Some error occurred!');
    });
}

const getCars = () => {
    let realm = new Realm({ schema: [Car, Person] });
    return realm.objects('Car').filtered('id = "1"');
}

const writeTransactionCreatePerson = () => {
    let realm = new Realm({ schema: [Car, Person] });
    realm.write(() => {
        let charlie = realm.create('Person', {
            id: 1,
            name: 'Charlie'
        });
    });
}

const getPersons = () => {
    let realm = new Realm({ schema: [Car, Person] });
    return realm.objects('Person').filtered('id = "1"');
}

const writeTransactionCreateCarAndPerson = () => {
    let realm = new Realm({ schema: [Car, Person] });
    realm.write(() => {
        realm.create('Car', {
            id: 1,
            make: 'Honda',
            model: 'Civic',
            miles: 1000,
        }, true);
    });
    realm.write(() => {
        realm.create('Person', {
            id: 1,
            name: 'Charlie'
        }, true);
    });
}

const writeTransactionCreateCarAndPerson2 = () => {
    let realm = new Realm({ schema: [Car, Person] });
    realm.write(() => {
        realm.create('Car', {
            id: 1,
            make: 'Honda',
            model: 'Civic',
            miles: 1000,
        }, true);

        realm.create('Person', {
            id: 1,
            name: 'Charlie'
        }, true);
    });
}

export {
clear,
writeTransactionCreateCar,
writeTransactionUpdateCar,
writeTransactionUpdateCarWithError,
getCars,
writeTransactionCreatePerson,
getPersons,
writeTransactionCreateCarAndPerson,
writeTransactionCreateCarAndPerson2
}
