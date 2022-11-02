import { useGlobalContext } from "../context";

const Home = () => {
  const { handleSubmit } = useGlobalContext();

  return (
    <section>
      <div className='container'>
        <div className='page-center fd-column'>
          <h1 className='title'>Another Quiz App</h1>
          <form
            className='quiz__options-form flex fd-column'
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className='form__selector-container'>
              <label htmlFor='quiz_amount' className='form__label'>
                Number of Questions
              </label>
              <input
                type='number'
                name='quiz_amount'
                className='form__input'
                min='1'
                max='50'
                defaultValue='10'
                autoFocus
              />
            </div>
            <div className='form__selector-container'>
              <label htmlFor='quiz_category' className='form__label'>
                Select Category:
              </label>
              <select name='quiz_category' className='form__select'>
                <option value='any' className='form__select-option'>
                  Any Category
                </option>
                <option value='9' className='form__select-option'>
                  General Knowledge
                </option>
                <option value='10' className='form__select-option'>
                  Entertainment: Books
                </option>
                <option value='11' className='form__select-option'>
                  Entertainment: Film
                </option>
                <option value='12' className='form__select-option'>
                  Entertainment: Music
                </option>
                <option value='13' className='form__select-option'>
                  Entertainment: Musicals & Theatres
                </option>
                <option value='14' className='form__select-option'>
                  Entertainment: Television
                </option>
                <option value='15' className='form__select-option'>
                  Entertainment: Video Games
                </option>
                <option value='16' className='form__select-option'>
                  Entertainment: Board Games
                </option>
                <option value='17' className='form__select-option'>
                  Science & Nature
                </option>
                <option value='18' className='form__select-option'>
                  Science: Computers
                </option>
                <option value='19' className='form__select-option'>
                  Science: Mathematics
                </option>
                <option value='20' className='form__select-option'>
                  Mythology
                </option>
                <option value='21' className='form__select-option'>
                  Sports
                </option>
                <option value='22' className='form__select-option'>
                  Geography
                </option>
                <option value='23' className='form__select-option'>
                  History
                </option>
                <option value='24' className='form__select-option'>
                  Politics
                </option>
                <option value='25' className='form__select-option'>
                  Art
                </option>
                <option value='26' className='form__select-option'>
                  Celebrities
                </option>
                <option value='27' className='form__select-option'>
                  Animals
                </option>
                <option value='28' className='form__select-option'>
                  Vehicles
                </option>
                <option value='29' className='form__select-option'>
                  Entertainment: Comics
                </option>
                <option value='30' className='form__select-option'>
                  Science: Gadgets
                </option>
                <option value='31' className='form__select-option'>
                  Entertainment: Japanese Anime & Manga
                </option>
                <option value='32' className='form__select-option'>
                  Entertainment: Cartoon & Animations
                </option>
              </select>
            </div>
            <div className='form__selector-container'>
              <label htmlFor='quiz_difficulty' className='form__label'>
                Select Difficulty:
              </label>
              <select name='quiz_difficulty' className='form__select'>
                <option value='any' className='form__select-option'>
                  Any Difficulty
                </option>
                <option value='easy' className='form__select-option'>
                  Easy
                </option>
                <option value='medium' className='form__select-option'>
                  Medium
                </option>
                <option value='hard' className='form__select-option'>
                  Hard
                </option>
              </select>
            </div>
            <div className='form__selector-container'>
              <label htmlFor='quiz_type' className='form__label'>
                Select Type:
              </label>
              <select name='quiz_type' className='form__select'>
                <option value='any' className='form__select-option'>
                  Any Type
                </option>
                <option value='multiple' className='form__select-option'>
                  Multiple Choice
                </option>
                <option value='boolean' className='form__select-option'>
                  True / False
                </option>
              </select>
            </div>
            <button type='submit' className='btn'>
              Start
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Home;
