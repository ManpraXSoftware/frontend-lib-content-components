import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';

import 'tinymce';
import 'tinymce/themes/silver';
import 'tinymce/skins/ui/oxide/skin.css';
import 'tinymce/icons/default';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/table';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/emoticons/js/emojis';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/image';
import 'tinymce/plugins/imagetools';
import 'tinymce/plugins/quickbars';

import { selectors } from '../../data/redux';
import ImageUploadModal from '../ImageUploadModal';
import SourceCodeModal from '../SourceCodeModal';
import * as hooks from './hooks';
import AiModal from './AiModal';

export const TinyMceWidget = ({
  editorType,
  editorRef,
  disabled,
  id,
  // redux
  assets,
  isLibrary,
  lmsEndpointUrl,
  studioEndpointUrl,
  ...props
}) => {
  const { isImgOpen, openImgModal, closeImgModal } = hooks.imgModalToggle();
  const { isSourceCodeOpen, openSourceCodeModal, closeSourceCodeModal } = hooks.sourceCodeModalToggle(editorRef);
  const images = hooks.filterAssets({ assets });
  const imageSelection = hooks.selectedImage(null);
  const dispatch = useDispatch();
  const [aiImagePrompt, setAiImagePrompt] = useState("");
  const [aiImageIsOpen, setAiImageIsOpen] = useState(false);
  const openAiImageModal = () => {
    setAiImagePrompt(tinymce.activeEditor.selection.getContent());
    setAiImageIsOpen(true);
  }
  return (
    <>
      {isLibrary ? null : (
        <ImageUploadModal
          isOpen={isImgOpen}
          close={closeImgModal}
          editorRef={editorRef}
          images={images}
          editorType={editorType}
          lmsEndpointUrl={lmsEndpointUrl}
          {...imageSelection}
        />
      )}
      {editorType === 'text' ? (
        <SourceCodeModal
          isOpen={isSourceCodeOpen}
          close={closeSourceCodeModal}
          editorRef={editorRef}
        />
      ) : null}
      <Editor
        id={id}
        disabled={disabled}
        {
        ...hooks.editorConfig({
          openImgModal,
          openSourceCodeModal,
          editorType,
          editorRef,
          isLibrary,
          lmsEndpointUrl,
          studioEndpointUrl,
          images,
          dispatch: dispatch,
          openAiImageModal: openAiImageModal,
          setSelection: imageSelection.setSelection,
          clearSelection: imageSelection.clearSelection,
          ...props,
        })
        }
      />
      <AiModal close={() => setAiImageIsOpen(false)} isOpen={aiImageIsOpen} imagePrompt={aiImagePrompt} />
    </>
  );
};
TinyMceWidget.defaultProps = {
  isLibrary: null,
  editorType: null,
  editorRef: null,
  lmsEndpointUrl: null,
  studioEndpointUrl: null,
  assets: null,
  id: null,
  disabled: false,
};
TinyMceWidget.propTypes = {
  editorType: PropTypes.string,
  isLibrary: PropTypes.bool,
  assets: PropTypes.shape({}),
  editorRef: PropTypes.shape({}),
  lmsEndpointUrl: PropTypes.string,
  studioEndpointUrl: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
};

export const mapStateToProps = (state) => ({
  assets: selectors.app.assets(state),
  lmsEndpointUrl: selectors.app.lmsEndpointUrl(state),
  studioEndpointUrl: selectors.app.studioEndpointUrl(state),
  isLibrary: selectors.app.isLibrary(state),
});

export default (connect(mapStateToProps)(TinyMceWidget));
