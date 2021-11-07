import { Form } from './styles';

interface SearchFormProps {
    active: boolean;
}

function SearchForm({ active }: SearchFormProps) {
    return (
        <Form active={active}>
            <input type="search" placeholder="Search here..." id="search-box"/>
            <label htmlFor="search-box" className="fas fa-search"></label>
        </Form>
    );
}

export { SearchForm };