export default (text = 'Hello World') => {
    const element = document.createElement('div');

    

    element.innerHTML = `
    <div>
        <h2>What is this?</h2>
        <p>This is just going to be experiments in different web technologies: some good; some rubbish.
        <nav>
            <p>Here we go:</p>
            <ul>
                <li><a href="#ex01" title="Experiment 1">Experiment 1 goes here</a></li>
            </ul>
        </nav>
    </div>
    `;

    return element;
}