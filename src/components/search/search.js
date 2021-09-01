import { FormGroup, Label, Input, Button, Row } from "reactstrap";
import './search.css';

const Search = () => {
    return (
        <Row>            
            <Label className="searchLabel">Поиск по городам</Label>
            <FormGroup className="col-11">
                <Input
                type="search"
                name="search"
                placeholder="Введите ваш город"
                />                               
            </FormGroup>
            <Button className="col-1">Поиск</Button>         
        </Row>
    )
}

export default Search;