import createElement from '../helpers/domHelper';

export function createFighterImage(fighter) {
    const { source, name } = fighter;
    const attributes = {
        src: source,
        title: name,
        alt: name
    };
    const imgElement = createElement({
        tagName: 'img',
        className: 'fighter-preview___img',
        attributes
    });

    return imgElement;
}

export function createFighterStats(fighter) {
    const { name, health, attack, defense } = fighter;
    const fighterProperties = { name, health, attack, defense };

    const listElement = createElement({
        tagName: 'ul',
        className: 'fighter-preview___list'
    });
    Object.keys(fighterProperties).forEach(key =>
        listElement.append(
            createElement({
                tagName: 'li',
                className: '',
                textContent: `${key}: ${fighterProperties[key]}`
            })
        )
    );

    return listElement;
}

export function createFighterPreview(fighter, position) {
    const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
    const fighterElement = createElement({
        tagName: 'div',
        className: `fighter-preview___root ${positionClassName}`
    });

    const fighterImage = createFighterImage(fighter);
    const fighterStats = createFighterStats(fighter);

    fighterElement.append(
        position === 'right' ? fighterStats : fighterImage,
        position === 'right' ? fighterImage : fighterStats
    );

    // todo: show fighter info (image, name, health, etc.)

    return fighterElement;
}
