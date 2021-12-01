/** @format */

export const reformatPhone = (phone) => {
  let x = phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  return !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
};
export const MOBILE_WIDTH = 878;

export const positionsMap = {
  'right passenger fender': 'right_passenger_fender',
  'right passenger side door': 'right_passenger_side_door',
  'right rear passenger side door': 'right_rear_passenger_side_door',
  'right passenger side quarter panel': 'right_passenger_side_quarter_panel',
  'left passenger fender': 'left_passenger_fender',
  'left rear passenger side door': 'left_rear_passenger_side_door',
  'left passenger side quarter panel': 'left_passenger_side_quarter_panel',
  'front bumper': 'front_bumper',
  hoot: 'hoot',
  roof: 'roof',
  trunk: 'rear_bumper',
};

export const STATIC_IMAGE_PATH =
  'https://static.maaco.com/resources/front/resources/images/';

export const containerCSS = `
                padding: 25px 15px;
                margin-right: auto;
                margin-left: auto;
                @media (min-width: 768px){
                    width: 750px;
                }
                @media (min-width: 992px){
                    width: 970px;
                }
                @media (min-width: 1200px) {
                  width: 1170px;
                }
            `;
