import { shallow } from 'enzyme'
import React from 'react'

import PersonList from './PersonList'

describe('PersonList', () => {

    const personListWrapper = (people) => shallow(<PersonList people={people} />);

    it('should render one unordered list', () => {
        const personListUnorderedList = personListWrapper([]).find('ul');

        expect(personListUnorderedList).toHaveLength(1);
    });

    it('should not render any li element if there are zero people', () => {
        const peopleListItems = personListWrapper([]).find('li');

        expect(peopleListItems).toHaveLength(0);
    });

    it('should render one li element when there is one person', () => {
        // Setup
        const people = [{ firstName: 'Alan', lastName: 'Turing' }];

        // Execute
        const peopleListItems = personListWrapper(people).find('li');

        // Assert
        expect(peopleListItems).toHaveLength(1);

    });

    it('should render one li element for each person', () => {
        // Setup
        const people = [
            { firstName: 'Jane', lastName: 'Curtin' },
            { firstName: 'Chevy', lastName: 'Chase' },
            { firstName: 'Jon', lastName: 'Lovitz' }
        ];

        // Execute
        const peopleListItems = personListWrapper(people).find('li');

        // Assert
        expect(peopleListItems).toHaveLength(people.length);
    });

    it('', () => {
        const people = [{firstName: 'Larry', lastName: 'Page'}];
        const personListItems = personListWrapper(people).find('li');

        expect(personListItems.childAt(0).text()).toContain(people[0].firstName);
        expect(personListItems.childAt(2).text()).toContain(people[0].lastName);
    })
});