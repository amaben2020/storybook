import { Accordion } from 'flowbite-react';

const CustomAccordion = ({ data, ...otherProps }) => {
  // flush, arrowIcon, alwaysOpen

  return (
    <Accordion {...otherProps}>
      {data.map(({ title, body, linkText, additionalBody }) => (
        <Accordion.Panel key={title}>
          <Accordion.Title>{title}</Accordion.Title>
          <Accordion.Content>
            <p className='mb-2 text-gray-500 dark:text-gray-400'>{body}</p>
            <p className='text-gray-500 dark:text-gray-400'>
              <a
                href='https://flowbite.com/docs/getting-started/introduction/'
                className='text-blue-600 hover:underline dark:text-blue-500'
              >
                {linkText}
              </a>
              {additionalBody}
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
