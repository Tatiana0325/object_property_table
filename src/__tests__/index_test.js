import  {orderByProps} from '../js/index';

test('function check', () => {
    const hero = {name: 'мечник', 
                health: 10, 
                level: 2, 
                attack: 80, 
                defence: 40};

    const heroSort = orderByProps(hero, ['name', 'level']);

    expect(heroSort).toEqual([
        {key: "name", value: "мечник"},
        {key: "level", value: 2},
        {key: "attack", value: 80},
        {key: "defence", value: 40},
        {key: "health", value: 10}
      ]);
})