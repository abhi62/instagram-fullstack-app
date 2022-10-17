import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import {useForm, Control, Controller} from 'react-hook-form';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import React, {useState} from 'react';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import {IUser} from '../../components/Types/models';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  multiline?: boolean;
  name: IEditableUserField;
  rules?: object;
}
const CustomInput = ({
  label,
  multiline = false,
  control,
  name,
  rules = {},
}: ICustomInput) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: {onChange, value, onBlur},
        fieldState: {error},
      }) => {
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.textLabel}>{label}</Text>
            <View style={{flex: 1}}>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={label}
                style={[
                  styles.input,
                  {borderColor: error ? colors.error : colors.border},
                ]}
                multiline={multiline}
              />
              {error && (
                <Text style={{color: colors.error}}>
                  {error.message || 'Error'}
                </Text>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

const EditProfileScreen = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null)
  const onSubmit = (data: IEditableUser) => {
  };
  const {control, handleSubmit} = useForm<IUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio
    }
  });
  const onChangePhoto = () => {

    launchImageLibrary({mediaType: 'photo'}, ({didCancel, errorCode, errorMessage, assets}) => {
      if (!didCancel && !errorCode && assets && assets.length > 0) {
        setSelectedPhoto(assets[0])

      }
    })
  }
  return (
    <View style={styles.page}>
      <Image source={{uri: selectedPhoto?.uri || user.image}} style={styles.avatar} />
      <Text onPress={onChangePhoto} style={styles.profileCta}>Change Profile Photo</Text>
      <CustomInput
        control={control}
        name={'name'}
        label={'Name'}
        rules={{required: 'Name is require', minLength: {value: 3, message: "Name must be at least 3 characters"}}}
      />
      <CustomInput
        control={control}
        name={'username'}
        rules={{required: 'User Name is require'}}
        label={'Username'}
      />
      <CustomInput
        control={control}
        name={'website'}
        rules={{
          required: 'website is require',
          pattern: {
            value: URL_REGEX,
            message: "Invalid url "
          }
        }}
        label={'Website'}
      />
      <CustomInput
        control={control}
        name={'bio'}
        rules={{required: 'bio is require'}}
        label={'Bio'}
        multiline={true}
      />
      <Text onPress={handleSubmit(onSubmit)} style={styles.submit}>
        Submit
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  profileCta: {
    color: colors.primary,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  textLabel: {
    width: 75,
  },
  input: {
    borderBottomWidth: 1,
    // flex: 1
  },
  submit: {
    color: colors.primary,
  },
});

export default EditProfileScreen;
