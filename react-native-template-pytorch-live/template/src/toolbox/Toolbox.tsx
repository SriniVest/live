/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import * as React from 'react';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import {ScrollView, StyleSheet} from 'react-native';
import ToolboxList from './ToolboxList';
import CanvasArc from './canvas/CanvasArc';
import ToolboxContext, {useToolboxContext} from './ToolboxContext';
import CanvasDrawImage from './canvas/CanvasDrawImage';
import CanvasAnimation from './canvas/CanvasAnimation';
import CanvasRect from './canvas/CanvasRect';
import CanvasClearRect from './canvas/CanvasClearRect';
import CanvasSaveRestore from './canvas/CanvasSaveRestore';
import CanvasSetTransform from './canvas/CanvasSetTransform';
import CanvasScale from './canvas/CanvasScale';
import CanvasRotate from './canvas/CanvasRotate';
import CanvasTranslate from './canvas/CanvasTranslate';
import CanvasFillText from './canvas/CanvasFillText';
import ImageScale from './canvas/ImageScale';
import CameraFrameByFrame from './camera/CameraFrameByFrame';
import CameraTakePicture from './camera/CameraTakePicture';
import CanvasMoveTo from './canvas/CanvasMoveTo';

export type Tool = {
  icon?: JSX.Element;
  title: string;
  subtitle: string;
  component?: React.ComponentType<any>;
};

export type ToolSection = {
  title: string;
  data: Tool[];
}[];

const tools: ToolSection = [
  {
    title: 'Canvas',
    data: [
      {
        icon: <Icon name="color-palette-outline" size={32} color="tomato" />,
        title: 'Canvas#rect',
        subtitle: 'Drawing rect on a canvas',
        component: CanvasRect,
      },
      {
        icon: <Icon name="color-palette-outline" size={32} color="tomato" />,
        title: 'Canvas#clearRect',
        subtitle: 'Clear rect on a canvas',
        component: CanvasClearRect,
      },
      {
        icon: <Icon name="color-palette-outline" size={32} color="tomato" />,
        title: 'Canvas#arc',
        subtitle: 'Drawing arc/circles on a canvas',
        component: CanvasArc,
      },
      {
        icon: <Icon name="color-palette-outline" size={32} color="tomato" />,
        title: 'Canvas#moveTo',
        subtitle: 'Drawing lines on a canvas',
        component: CanvasMoveTo,
      },
      {
        icon: <Icon name="color-palette-outline" size={32} color="tomato" />,
        title: 'Canvas#drawImage',
        subtitle: 'Drawing images on a canvas',
        component: CanvasDrawImage,
      },
      {
        icon: <Icon name="color-palette-outline" size={32} color="tomato" />,
        title: 'Canvas Animation',
        subtitle: 'Animate drawings on canvas',
        component: CanvasAnimation,
      },
      {
        icon: <Icon name="color-palette-outline" size={32} color="tomato" />,
        title: 'Canvas Save and Restore',
        subtitle: 'Save, draw, and restore context',
        component: CanvasSaveRestore,
      },
      {
        icon: <Icon name="color-palette-outline" size={32} color="tomato" />,
        title: 'Canvas Set Transform',
        subtitle: 'Draw with transform',
        component: CanvasSetTransform,
      },
      {
        icon: <Icon name="color-palette-outline" size={32} color="tomato" />,
        title: 'Canvas Scale',
        subtitle: 'Drawing with scale on canvas',
        component: CanvasScale,
      },
      {
        icon: <Icon name="color-palette-outline" size={32} color="tomato" />,
        title: 'Canvas Rotate',
        subtitle: 'Drawing with rotate on canvas',
        component: CanvasRotate,
      },
      {
        icon: <Icon name="color-palette-outline" size={32} color="tomato" />,
        title: 'Canvas Translate',
        subtitle: 'Drawing with translate on canvas',
        component: CanvasTranslate,
      },
      {
        icon: <Icon name="color-palette-outline" size={32} color="tomato" />,
        title: 'Canvas Fill Text',
        subtitle: 'Drawing text on canvas',
        component: CanvasFillText,
      },
    ],
  },

  {
    title: 'Camera and Images',
    data: [
      {
        icon: <Icon name="image-outline" size={32} color="tomato" />,
        title: 'Image Scale',
        subtitle: 'Scaling images',
        component: ImageScale,
      },
      {
        icon: <Icon name="videocam-outline" size={32} color="tomato" />,
        title: 'Camera Frame By Frame',
        subtitle: 'Frame by frame processing of camera images',
        component: CameraFrameByFrame,
      },
      {
        icon: <Icon name="videocam-outline" size={32} color="tomato" />,
        title: 'Camera Take Picture',
        subtitle: 'Take picture processing',
        component: CameraTakePicture,
      },
    ],
  },
];

// for (let i = 2; i <= 100; i++) {
//   tools.push({title: `Tool ${i}`, subtitle: `Subtitle tool ${i}`});
// }

type ToolboxParamList = {
  API: undefined;
  ToolView: {
    title: string;
  };
};

const Stack = createStackNavigator<ToolboxParamList>();

function ToolView() {
  const {activeTool} = useToolboxContext();
  const Component = activeTool?.component;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Component && <Component />}
    </ScrollView>
  );
}

export default function Toolbox() {
  return (
    <ToolboxContext>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="API" options={{headerShown: false}}>
          {props => (
            <ToolboxList
              {...props}
              tools={tools}
              onSelect={tool => {
                props.navigation.navigate('ToolView', {
                  title: tool.title,
                });
              }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="ToolView"
          component={ToolView}
          options={({route}) => {
            if (route != null) {
              return {title: route.params.title};
            }
            return {};
          }}
        />
      </Stack.Navigator>
    </ToolboxContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});